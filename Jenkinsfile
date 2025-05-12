pipeline {
  agent any

  tools {
    nodejs "NodeJS_18" // Назва NodeJS у Jenkins
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/Ih0rk0/carShowcase.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Build Project') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npm run test -- --ci --reporters=jest-junit'
      }
    }

    stage('Publish JUnit Results') {
      steps {
        junit 'junit.xml'
      }
    }

    stage('Publish HTML Report') {
      when {
        expression { fileExists('coverage\\index.html') }
      }
      steps {
        publishHTML(target: [
          reportDir: 'coverage',
          reportFiles: 'index.html',
          reportName: 'Coverage Report'
        ])
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    failure {
      echo 'Pipeline failed. Please check logs and reports.'
    }
  }
}
