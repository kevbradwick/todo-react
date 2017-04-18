const initialState = {
  items: []
};


export const Actions = {
  ADD_TODO: 'ADD_TODO'
};


export default function todoApp(state = initialState, action) {

  console.log(action);
  switch (action.type) {

  }

  return state;
}


