// ['banner', 'about', 'features', 'pricing', 'analysis','how-it-work', 'contact', "blog"]
	  document.getElementById('searchInput').addEventListener('input', function() {
      var searchTerm = this.value.toLowerCase();
      var resultsDropdown = document.getElementById('resultsDropdown');
      var keywords =['banner', 'about', 'features', 'pricing', 'analysis','how-it-work', 'contact', "blog"]; 

      resultsDropdown.innerHTML = '';

      if (searchTerm.trim() !== '') {
        keywords.forEach(function(keyword) {
          if (keyword.includes(searchTerm)) {
            var resultItem = document.createElement('div');
            resultItem.textContent = keyword;
            resultItem.classList.add('results-item');
            resultItem.addEventListener('click', function() {
              var sectionId = keyword.toLowerCase();
              var targetSection = document.getElementById(sectionId);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            });
            resultsDropdown.appendChild(resultItem);
          }
        });

        if (resultsDropdown.children.length > 0) {
          resultsDropdown.style.display = 'block';
        } else {
          resultsDropdown.style.display = 'none';
        }
      } else {
        resultsDropdown.style.display = 'none';
      }
    });

    document.addEventListener('click', function(event) {
      var resultsDropdown = document.getElementById('resultsDropdown');
      var searchInput = document.getElementById('searchInput');

      if (event.target !== searchInput && event.target !== resultsDropdown) {
        resultsDropdown.style.display = 'none';
      }
    });
