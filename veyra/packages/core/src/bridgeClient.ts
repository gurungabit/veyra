import {
  type JsonRpcRequest,
  type JsonRpcResponse,
  isJsonRpcFailure
} from "@veyra/protocol";

export interface BridgeClientOptions {
  endpoint: string;
  token: string;
}

export class BridgeClient {
  private id = 0;

  constructor(private readonly options: BridgeClientOptions) {}

  async request<TResult = unknown, TParams = unknown>(method: string, params?: TParams): Promise<TResult> {
    const request: JsonRpcRequest<TParams> = {
      jsonrpc: "2.0",
      id: ++this.id,
      method
    };
    if (params !== undefined) {
      request.params = params;
    }

    const response = await fetch(this.options.endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-veyra-token": this.options.token
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`Bridge request failed with HTTP ${response.status}.`);
    }

    const payload = (await response.json()) as JsonRpcResponse<TResult>;
    if (isJsonRpcFailure(payload)) {
      throw new Error(payload.error.message);
    }

    return payload.result;
  }
}
