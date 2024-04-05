export default function FormatName() {

  const user = {
  firstName: 'Candy',
  lastName: 'Wang',
  description: '前端工程師'
};

  return (
    <div>
      <h1>{`${user.firstName} ${user.lastName} 是一位 ${user.description}`}</h1>
    </div>
  )
}