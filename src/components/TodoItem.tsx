type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li typeof="checkbox" className="flex gap-1 items-center">
        
      <input id={id} type="checkbox" className="peer-checked:line-through"></input>
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through">
        {title}
      </label>
    </li>
  );
}
