pipeline {
    agent any
    tools {
        nodejs '22.3.0'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('chrisitornado-dockerhub')
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm ci'
                sh 'npm run lint'
            }
        }

        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'sq1') {
                    sh 'npm ci'
                    sh 'npm run sonar-scanner'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t chrisitornado/todos-frontend:latest .'
            }
        }
        
        stage('Deliver') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh 'echo docker push chrisitornado/todos-frontend:latest'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! 🎉'
        }
        failure {
            echo 'Pipeline failed! 😞'
        }
        always {
            sh 'docker logout'
        }
    }
}
