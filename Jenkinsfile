pipeline {
    agent any
    tools {
        nodejs: '22.3.0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }
        
        stage('Lint') {
            environment {
                // Define the NodeJS installation to use in this stage
                nodejsInstallation = 'node' // This should match the NodeJS installation name in Jenkins
            }
            steps {
                // Use the NodeJS installation defined above
                tool name: nodejsInstallation, type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                
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
