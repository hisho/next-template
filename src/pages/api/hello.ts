
type Response = {
  statusCode: number
  json(name: { name: string }): void
}

export default (_req: void, res: Response): void => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}