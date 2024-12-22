provider "aws" {
  region = var.aws_region
}

data "aws_ecr_repository" "ecr_docker_repairshop_nextjs" {
  name = var.ecr_repository_name
}

data "aws_iam_role" "lambda_execution_role" {
  name = var.lambda_execution_role_name
}

resource "aws_lambda_function" "nextjs_lambda" {
  function_name = var.lambda_function_name
  role          = data.aws_iam_role.lambda_execution_role.arn
  package_type  = "Image"
  image_uri     = "${var.docker_ecr_repo_url}:latest"
  memory_size   = 512
  timeout       = 10
}

# API Gateway
resource "aws_apigatewayv2_api" "http_api" {
  name          = "${var.lambda_function_name}_api"
  protocol_type = "HTTP"
}

# Integration between API Gateway and Lambda
resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.nextjs_lambda.invoke_arn
  payload_format_version = "2.0"
}
# Route for API Gateway
resource "aws_apigatewayv2_route" "lambda_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "ANY /{proxy+}"
  target    = aws_apigatewayv2_integration.lambda_integration.id
}
# Deploy API Gateway
resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
}


