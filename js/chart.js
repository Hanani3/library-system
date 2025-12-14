const ctx = document.getElementById('bookChart').getContext('2d');

const bookChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Borrowed Books', 'Available Books'],
    datasets: [{
      label: 'Number of Books',
      data: [20, 32], 
      backgroundColor: [
        'rgba(255, 105, 180, 0.8)', 
        'rgba(33, 37, 41, 0.8)'     
      ],
      borderColor: [
        'rgba(255, 105, 180, 1)',
        'rgba(33, 37, 41, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#000'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#000'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#000',
          stepSize: 5
        }
      }
    }
  }
});
