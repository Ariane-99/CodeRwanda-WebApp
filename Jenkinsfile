
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm.cmd install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Code Rwanda tests...'
                bat 'npm.cmd test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t coderwanda-webapp .'
            }
        }

        stage('Deploy with Docker') {
            steps {
                echo 'Deploying Code Rwanda application...'
               bat 'docker rm -f coderwanda-jenkins || exit /b 0'
                bat 'docker run -d -p 8081:80 --name coderwanda-jenkins coderwanda-webapp'
            }
        }
    }
}
