import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useSupabaseData, useSupabaseInsert } from '@/hooks/useSupabaseData';
import { useState } from 'react';
import { Loader2, Plus, Database, AlertCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Example component showing how to use Supabase
export default function SupabaseExample() {
  const [newItemName, setNewItemName] = useState('');
  
  // Example: Fetch data from a 'todos' table
  const { data: todos, loading, error, refetch } = useSupabaseData('todos', '*');
  const { insert, loading: inserting } = useSupabaseInsert('todos');

  const handleAddTodo = async () => {
    if (!newItemName.trim()) return;

    try {
      await insert({
        title: newItemName,
        completed: false,
        created_at: new Date().toISOString()
      });
      
      setNewItemName('');
      refetch();
      toast.success('Todo added successfully!');
    } catch (err) {
      toast.error('Failed to add todo');
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Database className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Supabase</span> Integration
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Real-time data fetching and management with Supabase
          </p>
        </motion.div>

        <div className="grid gap-6">
          {/* Add new todo */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Todo
              </CardTitle>
              <CardDescription>
                Create a new todo item in your Supabase database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter todo title..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleAddTodo}
                  disabled={inserting || !newItemName.trim()}
                  className="bg-gradient-primary hover:shadow-glow"
                >
                  {inserting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Display todos */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle>Your Todos</CardTitle>
              <CardDescription>
                Data fetched from your Supabase 'todos' table
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  <span className="ml-2 text-muted-foreground">Loading todos...</span>
                </div>
              ) : error ? (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium text-destructive">Error loading data</p>
                    <p className="text-sm text-muted-foreground">{error}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Make sure you've connected to Supabase and created a 'todos' table
                    </p>
                  </div>
                </div>
              ) : todos.length === 0 ? (
                <div className="text-center py-8">
                  <Database className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No todos found</p>
                  <p className="text-sm text-muted-foreground">
                    Add your first todo above or create a 'todos' table in Supabase
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {todos.map((todo: any, index: number) => (
                    <motion.div
                      key={todo.id || index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{todo.title || 'Untitled'}</p>
                        {todo.created_at && (
                          <p className="text-sm text-muted-foreground">
                            Created: {new Date(todo.created_at).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                      <Badge variant={todo.completed ? "default" : "secondary"}>
                        {todo.completed ? 'Completed' : 'Pending'}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="glass-effect border-primary/20">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Follow these steps to set up your Supabase tables
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary/10 text-primary">1</Badge>
                  <div>
                    <p className="font-medium">Connect to Supabase</p>
                    <p className="text-muted-foreground">
                      Click "Connect to Supabase" in the top right corner
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary/10 text-primary">2</Badge>
                  <div>
                    <p className="font-medium">Create a table</p>
                    <p className="text-muted-foreground">
                      Create a 'todos' table with columns: id (uuid), title (text), completed (boolean), created_at (timestamp)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary/10 text-primary">3</Badge>
                  <div>
                    <p className="font-medium">Enable RLS</p>
                    <p className="text-muted-foreground">
                      Enable Row Level Security and add appropriate policies
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}