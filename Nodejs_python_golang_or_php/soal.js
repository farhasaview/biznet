function getPrimes(numb) {
	let listNumb = [],
	    primes = []

	// add all list number lower than numb
	for (let i = 0; i < numb; i++) {
		if (i > 1) {
			listNumb.push(i)
		}
	}

	// iteration list numb
	while (listNumb.length) {
		// add first numb from list numb to prime
		primes.push(listNumb.shift())
		// re-assign list numb = (filter list numb, remove item where modulus division with item in prime is 0)
		listNumb = listNumb.filter(i => i % primes[primes.length - 1] !== 0)
	}

	return primes
}