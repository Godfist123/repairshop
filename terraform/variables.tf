variable "aws_region" {
  default = "ap-southeast-2"
}

variable "lambda_function_name" {
  default = "repairshop-nextjs"
}

variable "ecr_repository_name" {
  default = "repairshop-nextjs"
}

variable "lambda_execution_role_name" {
  default = "repairshop-lambda-execution-role"

}

variable "docker_ecr_repo_url" {
  default = "637423524627.dkr.ecr.ap-southeast-2.amazonaws.com / repairshop-nextjs"
}
