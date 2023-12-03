pipeline {
    agent any

    environment {
        //AWS_CREDENTIALS = credentials('62c39d7a-6bdc-474a-9d4f-7c379e3b7c9d')
        // Substitua 'id-da-credencial' pelo ID real da sua credencial no Jenkins
        SSH_PUBLIC_KEY = credentials('18933e5f-ca4d-4751-a118-29381470793f')
    }



    stage('Apply user data') {
                steps {
                    withCredentials([string(credentialsId: '4713449b-a476-429a-afe4-f0bec4086c9a', variable: 'SSH_PUBLIC_KEY')]) {
                        sh '''
                        ssh -o StrictHostKeyChecking=no ec2-user@54.226.133.72 " 
                            sudo yum update
                            sudo yum -y install docker wget git
                            sudo service docker start
                            sudo usermod -a -G docker ec2-user
                            sudo chkconfig docker on
                            sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
                            sudo chmod +x /usr/local/bin/docker-compose
                            curl -s https://install.zerotier.com | sudo bash
                            sudo zerotier-cli join 632ea29085c53d2e

                        "
                        '''
                    }
                }
            }