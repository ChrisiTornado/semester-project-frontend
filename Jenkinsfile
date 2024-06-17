pipeline {
    agent any
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
                sh 'mvn clean package sonar:sonar'
              }
            }
          }
        
          stage("Quality Gate") {
            steps {
              timeout(time: 1, unit: 'HOURS') {
                waitForQualityGate abortPipeline: true
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
