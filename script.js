      if (localStorage.getItem('ageVerified') === 'true') {
      document.getElementById('ageGate').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
    }

    function allowEntry() {
      localStorage.setItem('ageVerified', 'true');
      document.getElementById('ageGate').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
    }

    function denyEntry() {
      document.getElementById('ageGate').style.display = 'none';
      document.getElementById('lockedScreen').style.display = 'flex';
    }
