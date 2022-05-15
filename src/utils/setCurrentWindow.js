function setWindow(setStates, windowsState, setWindowsState, name){
  const rotes = ['cart', 'historic', 'info_product']
  let windowOpen = !windowsState.windowOpen;
  let window = windowsState.window;

  if(name === 'info_product') setStates({menuOpen: false});
  if(name === 'store') windowOpen = false;
  else if( name !== window) windowOpen = true; //TODO: Implementar setTimeout para fechar e abrir outra janela

  if (rotes.includes(name)) {
    window = name;
  }   

  setWindowsState({window, windowOpen});
}

export default setWindow;