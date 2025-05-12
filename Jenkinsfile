pipeline {
  agent any

  tools {
    nodejs "NodeJS_18" // Назва NodeJS, задана в Jenkins (див. Manage Jenkins > Global Tool Configuration)
  }

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/Ih0rk0/carShowcase.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Publish JUnit Results') {
      steps {
        junit 'reports/junit/junit.xml'
      }
    }

    stage('Publish HTML Report (optional)') {
      steps {
        publishHTML(target: [
          reportDir: 'coverage',         // якщо ти використовуєш coverage
          reportFiles: 'index.html',
          reportName: 'Coverage Report'
        ])
      }
    }
  }
}
