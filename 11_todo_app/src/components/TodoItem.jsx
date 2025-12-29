import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Badge } from './ui/badge'
// import { Calendar } from './ui/calendar'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import { useDeleteTodo, useToggleTodo } from '@/hooks/use-create-todo'
import toast from 'react-hot-toast'


const TodoItem = ({todo}) => {

    const [isDeleting, setIsDeleting] = useState(false)
    const toggleMutation = useToggleTodo()
    const deleteMutation = useDeleteTodo()

    const getPriorityColor = (priority) => {
        switch(priority) {
            case "high": 
                return "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200"
            case "medium":
                return "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            case "low": 
                return "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200"
            default:
                return "bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
        }
    }

    const handleToggle = async () => {
        try {
            const result = await toggleMutation.mutateAsync(todo._id);
            if(!result.success){
                toast.error("Error :", result.error)
            } 
            if(result.success){
                toast.success("Todo updated")
            }
        } catch (error) {
            toast.error("Failed to update ")
            console.error("Error : ", error)
        }
    }

    const handleDelete = async () => {
        try {
            const result = await deleteMutation.mutateAsync(todo._id);
            if(!result.success){
                toast.error("Error :",result.error)
            }
            if(result.success){
                toast.success("Todo deleted")
            }
        } catch (error) {
            toast.error("Failed to delete ")
            console.error("Error : ", error)
        }
    }


  return (
    <Card className={cn("transition-all duration-200 hover:shadow-md", todo.completed && "opacity-75")}>
        <CardContent className="py-4">
            <div className='flex items-start gap-3'>
                <Checkbox
                 checked={todo.completed}
                 onCheckedChange={handleToggle}
                 disabled={false}
                 className='mt-1'
                />

                <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-2 mb-2'>
                        <h3 className={cn("font-medium text-sm", todo.completed && "line-through text-muted-foreground")}>
                            {todo.title}
                        </h3>
                        <Badge variant="secondary" className={cn("text-xs", getPriorityColor(todo.priority))}>{todo.priority}</Badge>

                    </div>

                    {todo.description && (
                        <p className={cn("text-sm text-muted-foreground mb-2", todo.completed && "line-through")}>
                            {todo.description}
                        </p>
                    )}

                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <Calendar className='w-3 h-3' />
                        <span>Created {new Date(todo.createdAt).toLocaleDateString()}</span>
                    </div>    
                </div>

                <div className='flex items-center gap-1'>
                    <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDelete}
                    disabled={deleteMutation.isPending}
                    className={cn("h-8 w-8 p-0", deleteMutation.isPending && "bg-destructive text-destructive-foreground")}>
                        <Trash2 className='w-4 h-4' />
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default TodoItem
