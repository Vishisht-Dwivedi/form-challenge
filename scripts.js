const submitBtn = document.querySelector('.submit-btn');

    const form = document.querySelector('form');

    const trueArr = []

    form.addEventListener('submit', (e) => {

      console.log(e);
      e.preventDefault();




      function checkFlag() {

        const trueArr = [];
        function nameAndTextChecker() {

          let textInputs = [e.srcElement[0], e.srcElement[1], e.srcElement[5]];
          for (input of textInputs) {

            const warningMsg = document.createElement('p');

            warningMsg.innerText = 'This field is required';
            warningMsg.classList.add('warning');

            if (input.value === '') {

              if (input.parentElement.children.length < 2) {

                input.parentElement.append(warningMsg);
                input.classList.add('warningBox');
              }

            } else {
              if (input.parentElement.children.length === 2) {
                input.classList.remove('warningBox');
                input.parentElement.removeChild(input.parentElement.children[1]);

              }
              trueArr.push(true);
            }
          }
          console.log(trueArr);
          if (trueArr[0] === true && trueArr[1] === true && trueArr[2] === true) {
            return true;
          }
        }


        function emailChecker() {
          const email = e.srcElement[2];
          if (email.value === "") {
            const warningMsg = document.createElement('p');
            warningMsg.innerText = 'This field is required';
            warningMsg.classList.add('warning');
            if (email.parentElement.children.length < 2) {

              email.parentElement.append(warningMsg);
              email.classList.add('warningBox');
            }
          } else if (!email.value.contains === '@') {
            warningMsg.innerText = 'Please enter a valid email address';
            if (email.parentElement.children.length === 2) {
              email.parentElement.children.removeChild(email.parentElement.children[1]);
              email.parentElement.append(warningMsg);
            } else {
              email.parentElement.append(warningMsg);
            }


          } else {
            if (email.parentElement.children.length === 2) {
              email.parentElement.removeChild(email.parentElement.children[1]);
              email.classList.remove('warningBox');
            }
            return true;
          }
        }

        function queryChecker() {
          if (e.srcElement[3].checked === false && e.srcElement[4].checked === false) {
            const warningTr = document.createElement('tr');
            const warningTd = document.createElement('td');
            warningTr.append(warningTd);

            const warningMsg = document.createElement('p');
            warningTd.append(warningMsg);

            warningMsg.innerText = 'Please select a query type';
            warningMsg.classList.add('warning');
            if (e.srcElement[3].parentElement.parentElement.parentElement.parentElement.children.length === 10) {
              e.srcElement[3].parentElement.parentElement.parentElement.insertAdjacentElement('afterend', warningTr);
            }

          } else {
            if (e.srcElement[3].parentElement.parentElement.parentElement.parentElement.children.length === 11) {
              e.srcElement[3].parentElement.parentElement.parentElement.parentElement.removeChild(e.srcElement[3].parentElement.parentElement.parentElement.parentElement.children[6]);
            }
            return true;
          }
        }
        function consentChecker() {
          if (e.srcElement[6].checked !== true) {
            const warningMsg = document.createElement('p');
            warningMsg.innerText = 'To submit this form, Please consent to being contacted';
            warningMsg.classList.add('warning');
            if (e.srcElement[6].parentElement.children.length === 1) {
              e.srcElement[6].parentElement.append(warningMsg);
            }
          } else {

            if (e.srcElement[6].parentElement.children.length > 1) {
              e.srcElement[6].parentElement.removeChild(e.srcElement[6].parentElement.children[1]);
            }
            return true;
          }
        }

        queryChecker();
        emailChecker();
        nameAndTextChecker();
        consentChecker();
        console.log(queryChecker(), emailChecker(), nameAndTextChecker(), consentChecker());
        if (queryChecker() === true && emailChecker() === true && nameAndTextChecker() === true && consentChecker() === true) {

          setTimeout(() => {
            console.log('here');
            console.log(document.querySelector('.success-inner'));
            document.querySelector('.success-inner').style.display = 'flex';
            setTimeout(() => {
              document.querySelector('.success-inner').style.display = 'none';
            }, 2000);
          }, 200);

        }
      }
      checkFlag();



    });
