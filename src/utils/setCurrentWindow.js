function setWindow(windowsState, setWindowsState, name){
  const rotes = ['cart', 'historic', 'info_product']
  let windowOpen = !windowsState.windowOpen;
  let window = windowsState.window;

  if(name === 'store') windowOpen = false;
  else if( name !== window) windowOpen = true; //TODO: Implementar setTimeout para fechar e abrir outra janela

  if (rotes.includes(name)) {
    window = name;
  }   

  setWindowsState({window, windowOpen});
}

export default setWindow;