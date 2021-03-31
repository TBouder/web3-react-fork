export type SendReturnResult = { result: any }
export type SendReturn = any

export type SendOld = ({ method }: { method: string }) => Promise<SendReturnResult | SendReturn>
export type SendAsync = (
  request: { method: string; params?: Array<any> },
  callback: (error: any, response: any) => void
) => void
