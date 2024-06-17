pipeline {
    agent any
    
    tools {node "node"}
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
        
        stage('Deploy') {
            steps {
                sh 'echo Deploying...'
                // Additional deployment steps can go here
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
    }
}
