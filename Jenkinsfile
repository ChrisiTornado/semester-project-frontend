pipeline {
    agent any
    tools {
        nodejs '22.3.0'
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('chrisitornado-dockerhub')
        registry = "chrisitornado/todos-frontend"
        registryCredential = '<dockerhub-credential-name>' 
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }
        
        
        stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
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
