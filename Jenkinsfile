pipeline {
    agent any

    environment {
        // Substitua 'id-da-credencial' pelo ID real da sua credencial no Jenkins
        SSH_PRIVATE_KEY = credentials('7f228755-13d9-42fc-825d-c3b82ce0fd76')
    }

    stages {

        stage('Docker DOWN') {
            steps {
                withCredentials([string(credentialsId: variable: 'SSH_PRIVATE_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no -i "$SSH_PRIVATE_KEY" ubuntu@34.239.160.25 " 
                        # Seus comandos para aplicar dados do usuário aqui
                        mkdir -p /home/ubuntu/bina-page
                        cd /home/ubuntu/bina-page
                        docker-compose down
                    "
                    '''
                }
            }
        }

        stage('Clone Git') {
            steps {
                withCredentials([string(credentialsId: variable: 'SSH_PRIVATE_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no -i "$SSH_PRIVATE_KEY" ubuntu@34.239.160.25 " 
                        # Seus comandos para aplicar dados do usuário aqui
                        cd /home/ubuntu/
                        git clone https://github.com/fabiosleal2712/bina-page.git || true
                        cd /home/ubuntu/bina-page
                        git pull
                    "
                    '''
                }
            }
        }

        stage('Docker UP') {
            steps {
                withCredentials([string(credentialsId: variable: 'SSH_PRIVATE_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no -i "$SSH_PRIVATE_KEY" ubuntu@34.239.160.25 " 
                        # Seus comandos para aplicar dados do usuário aqui
                        cd /home/ubuntu/bina-page
                        docker-compose up -d
                    "
                    '''
                }
            }
        }

    }
}
