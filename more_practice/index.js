import countryList from './countries.js';

const countryInput = document.getElementById('countrySelect');
for (const country of countryList) {
	const countryElement = document.createElement('option');
	countryElement.textContent = country;
	countryElement.value = `${country}`;
	countryInput.appendChild(countryElement);
}

function formConstraints(ids) {
	let passwordInitial = null;
	let passwordInitialValue = '';

	for (const id of ids) {
		const element = document.getElementById(id);
		element.required = true;
		if (id === 'passwordInitial') {
			passwordInitial = document.getElementById(id);
			passwordInitialValue = passwordInitial.value;
		}

		switch (id) {
			case 'emailInput':
				const emailValidator =
					/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
				element.addEventListener('focusout', (e) => {
					element.setCustomValidity('');
					if (emailValidator.test(element.value)) {
						return;
					}
					console.log('Invalid email');
					element.setCustomValidity('Please enter a valid email.');
					element.reportValidity();
				});
				break;
			case 'countrySelect':
				const bannedCountries = [
					'China',
					'Japan',
					'Canada',
					'Afghanistan',
				];
				element.addEventListener('focusout', (e) => {
					element.setCustomValidity('');
					if (bannedCountries.includes(element.value) === false) {
						return;
					}
					console.log('Invalid Country');
					console.log();
					element.setCustomValidity(
						`Banned countries are ${bannedCountries.join(', ')}. Please enter a country that is not banned.`,
					);
					element.reportValidity();
				});
				break;
			case 'passwordInitial':
				const passwordValidator = /.{8,24}/;
				element.addEventListener('focusout', (e) => {
					element.setCustomValidity('');
					if (passwordValidator.test(element.value)) {
						return;
					}
					element.setCustomValidity(
						'Please enter a password between 8 and 24 characters long.',
					);
					element.reportValidity();
				});
				break;
			case 'passwordVerify':
				element.addEventListener('focusout', (e) => {
					element.setCustomValidity('');
					if (passwordInitialValue === element.value) {
						return;
					}
					element.setCustomValidity(
						'Please match your password entries.',
					);
					passwordInitial.value = '';
					element.value = '';
					element.reportValidity();
				});
				break;
			default:
				break;
		}
	}
}

const formIDs = [
	'emailInput',
	'countrySelect',
	'passwordInitial',
	'passwordVerify',
	'submitUser',
];

formConstraints(formIDs);
