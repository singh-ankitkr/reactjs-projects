import * as redux from "https://cdn.skypack.dev/redux@4.0.5";
console.clear();

// People dropping off a form (Action createors)
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};


const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload:{
      amount: amount
    }
  };
};

// Reducers (Departments!)
const claimsHistory = (oldListOfClaims=[], action) => {
  if (action.type === 'CREATE_CLAIM'){
      // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  // we don't care the action (form!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney=100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amount;
  }
  if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies=[], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }
  if (action.type === 'DELETE_POLICY'){
    const newListOfPolicies = listOfPolicies.filter(policy => policy !== action.payload.name);
    return newListOfPolicies;
  }
  return listOfPolicies;
};

const Redux = redux;
// console.log(redux);

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);


store.dispatch(createPolicy('Ankit', 20));
store.dispatch(createPolicy('Priya', 30));
store.dispatch(createPolicy('Aviral', 35));

store.dispatch(createClaim('Ankit', 120));
store.dispatch(createClaim('Priya', 40));
store.dispatch(deletePolicy('Aviral', 35));
console.log(store.getState());