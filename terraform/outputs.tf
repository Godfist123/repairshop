output "lambda_function_arn" {
  value = aws_lambda_function.nextjs_lambda.arn
}

output "ecr_repository_url" {
  value = data.aws_ecr_repository.ecr_docker_repairshop_nextjs.repository_url
}

output "api_gateway_url" {
  value = aws_apigatewayv2_api.http_api.api_endpoint
}
