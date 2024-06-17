pipeline {
    agent { label 'linux' }
    tools {
        nodejs '22.3.0'
        maven '3.9.8' 
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
                    sh './mvnw clean org.sonarsource.scanner.maven:sonar-maven-plugin:3.9.0.2155:sonar'
                }
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
