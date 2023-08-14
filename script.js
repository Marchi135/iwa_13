let state = 'idle';
let user = null;
let calculated = '1';

//correcting from here
const logCalc = () => { 
    const isString = typeof calculated === 'string' && !isNaN(calculated);
    const calculatedAsNumber = isString ? parseInt(calculated) : parseFloat(calculated);
    calculated = calculatedAsNumber + 1; 
};

const calcUser = () => {
  logCalc();
  if (calculated > 2){
   user = 'John';
  state = 'requesting';
  
}
  if (calculated > 3) {
    state = 'idle';
  }
};

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);   
	}
};  

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()