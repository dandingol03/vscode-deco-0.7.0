


export const EXEC_SHELL='EXEC_SHELL';

export const onShellExeced = (stdout) => {
  return {
    type: EXEC_SHELL,
    data:stdout
  }
}