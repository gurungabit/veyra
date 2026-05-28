export type JsonRpcId = string | number;

export interface JsonRpcRequest<TParams = unknown> {
  jsonrpc: "2.0";
  id: JsonRpcId;
  method: string;
  params?: TParams;
}

export interface JsonRpcSuccess<TResult = unknown> {
  jsonrpc: "2.0";
  id: JsonRpcId;
  result: TResult;
}

export interface JsonRpcFailure {
  jsonrpc: "2.0";
  id: JsonRpcId | null;
  error: JsonRpcError;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

export type JsonRpcResponse<TResult = unknown> = JsonRpcSuccess<TResult> | JsonRpcFailure;

export const jsonRpcErrors = {
  parseError: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
  internalError: -32603
} as const;

export function isJsonRpcFailure(response: JsonRpcResponse): response is JsonRpcFailure {
  return "error" in response && response.error !== null && response.error !== undefined;
}
