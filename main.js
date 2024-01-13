//A1, R, N, wynik

        function oblicz(){
            let A1 = parseInt(document.getElementById('A1').value);
            let R = parseInt(document.getElementById('R').value);
            let N = parseInt(document.getElementById('N').value);
            let wynik = document.getElementById('wynik');

            wzor = "Ciąg arytmetyczny zawiera wyrazy: ";

            while(N){
                wzor += A1 + ", ";
                A1 = A1 + R;
                N--;
            }

            wynik.innerHTML = wzor;

        }