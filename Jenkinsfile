pipeline {
    agent any

    environment {
        // Substitua 'id-da-credencial' pelo ID real da sua credencial no Jenkins
        SSH_PUBLIC_KEY = credentials('18933e5f-ca4d-4751-a118-29381470793f')
    }

    stages {

        stage('Docker DOWN') {
            steps {
                withCredentials([string(credentialsId: '4713449b-a476-429a-afe4-f0bec4086c9a', variable: 'SSH_PUBLIC_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@54.226.133.72 " 
                        # Your commands for applying user data here
                        cd /home/ec2-user/bina-page
                        docker-compose down
                    "
                    '''
                }
            }
        }
        stage('clone git') {
            steps {
                withCredentials([string(credentialsId: '4713449b-a476-429a-afe4-f0bec4086c9a', variable: 'SSH_PUBLIC_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@54.226.133.72 " 
                        # Your commands for applying user data here
                        cd /home/ec2-user/
                        git clone https://github.com/fabiosleal2712/bina-page.git || true
                        cd /home/ec2-user/bina-page
                        git pull
                    "
                    '''
                }
            }
        }

        stage('Docker UP') {
            steps {
                withCredentials([string(credentialsId: '4713449b-a476-429a-afe4-f0bec4086c9a', variable: 'SSH_PUBLIC_KEY')]) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@54.226.133.72 " 
                        # Your commands for applying user data here
                        cd /home/ec2-user/bina-page
                        docker-compose up -d
                    "
                    '''
                }
            }
        }

    }
}
