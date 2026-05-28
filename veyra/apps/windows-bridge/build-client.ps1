param(
    [string]$FlexHome = (Join-Path $PSScriptRoot "..\..\..\.as3-sdk"),
    [string]$PlayerGlobalHome = ""
)

$ErrorActionPreference = "Stop"

$resolvedFlexHome = [System.IO.Path]::GetFullPath($FlexHome)
if (-not $PlayerGlobalHome) {
    $PlayerGlobalHome = Join-Path $resolvedFlexHome "frameworks\libs\player"
}

$compiler = Join-Path $resolvedFlexHome "bin\mxmlc.bat"
$sourceRoot = Join-Path $PSScriptRoot "as3-client\src"
$mainSource = Join-Path $sourceRoot "veyra\Main.as"
$output = Join-Path $PSScriptRoot "client.swf"

if (-not (Test-Path $compiler)) {
    throw "mxmlc was not found at $compiler"
}

if (-not (Test-Path $mainSource)) {
    throw "AS3 client source was not found at $mainSource"
}

$env:FLEX_HOME = $resolvedFlexHome
$env:PLAYERGLOBAL_HOME = [System.IO.Path]::GetFullPath($PlayerGlobalHome)

& $compiler `
    "+env.PLAYERGLOBAL_HOME=$env:PLAYERGLOBAL_HOME" `
    -source-path $sourceRoot `
    -default-size 958 550 `
    -output $output `
    $mainSource `
    -target-player 28.0 `
    -optimize

if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

Write-Host "Built $output"

