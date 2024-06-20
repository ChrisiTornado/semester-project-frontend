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
                echo DOCKERHUB_CREDENTIALS_USR
               
            }
        }

        
    }
    
    post {
        success {
            echo 'Pipeline succeeded! 🎉'
        }
        failure {
            echo 'Pipeline failed! 😞'
            emailext subject: '$DEFAULT_SUBJECT',
                        body: '$DEFAULT_CONTENT',
                        recipientProviders: [
                            [$class: 'CulpritsRecipientProvider'],
                            [$class: 'DevelopersRecipientProvider'],
                            [$class: 'RequesterRecipientProvider'] 
                        ], 
                        replyTo: '$DEFAULT_REPLYTO',
                        to: '$DEFAULT_RECIPIENTS'
        }
        always {
            sh 'docker logout'
        }
    }
}
