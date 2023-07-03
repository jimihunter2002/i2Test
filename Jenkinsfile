pipeline {
    agent {
	docker {image 'node:16-alpine'}
    }

    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'cd ~/i2Test/sort_engine && npm install'
                sh 'npm test'
            }
        }
    }
}

