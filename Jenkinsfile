pipeline {
    agent any

    environment {
        // Substitua 'id-da-credencial' pelo D real da sua credencial no Jenkins
        SSH_PRIVATE_KEY = credentials('8eb542f2-2539-4599-a538-299aff14f21c')
    }

    stages {

        stage('Docker DOWN') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'SSH_PRIVATE_KEY', keyFileVariable: 'SSH_PRIVATE_KEY')]) {
                    sh '''
                    echo "Conteúdo da Chave Privada:"
                    echo "${SSH_PRIVATE_KEY}"

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
                withCredentials([sshUserPrivateKey(credentialsId: 'SSH_PRIVATE_KEY', keyFileVariable: 'SSH_PRIVATE_KEY')]) {
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
                withCredentials([sshUserPrivateKey(credentialsId: 'SSH_PRIVATE_KEY', keyFileVariable: 'SSH_PRIVATE_KEY')]) {
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
