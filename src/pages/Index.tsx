import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  type: 'question' | 'material' | 'assignment';
  title: string;
  content: string;
  tags: string[];
  answers?: number;
  likes: number;
  deadline?: string;
}

interface Schedule {
  id: number;
  subject: string;
  time: string;
  room: string;
  type: 'lecture' | 'seminar' | 'lab';
}

const Index = () => {
  const [selectedNav, setSelectedNav] = useState('feed');

  const posts: Post[] = [
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: '',
      time: '15 мин назад',
      type: 'question',
      title: 'Помогите разобраться с интегралами',
      content: 'Не могу понять как решать интегралы с заменой переменных. Кто-нибудь может объяснить на простом примере?',
      tags: ['Математика', 'Интегралы'],
      answers: 5,
      likes: 12
    },
    {
      id: 2,
      author: 'Дмитрий Козлов',
      avatar: '',
      time: '1 час назад',
      type: 'material',
      title: 'Конспект по квантовой физике',
      content: 'Загрузил подробный конспект с последней лекции по квантовой механике. Там все формулы и примеры.',
      tags: ['Физика', 'Конспекты'],
      likes: 24
    },
    {
      id: 3,
      author: 'Мария Петрова',
      avatar: '',
      time: '3 часа назад',
      type: 'assignment',
      title: 'Лабораторная работа №5',
      content: 'Не забудьте сдать лабораторную по программированию до пятницы!',
      tags: ['Программирование', 'Дедлайн'],
      deadline: 'Через 2 дня',
      likes: 8
    }
  ];

  const schedule: Schedule[] = [
    { id: 1, subject: 'Математический анализ', time: '09:00', room: '401', type: 'lecture' },
    { id: 2, subject: 'Программирование', time: '10:45', room: '205', type: 'lab' },
    { id: 3, subject: 'Английский язык', time: '12:30', room: '312', type: 'seminar' },
    { id: 4, subject: 'Физика', time: '14:15', room: '501', type: 'lecture' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'question': return 'MessageCircle';
      case 'material': return 'FileText';
      case 'assignment': return 'CheckSquare';
      default: return 'File';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'bg-accent text-accent-foreground';
      case 'material': return 'bg-primary text-primary-foreground';
      case 'assignment': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-primary/10 text-primary border-primary/20';
      case 'seminar': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'lab': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const navItems = [
    { id: 'feed', label: 'Лента', icon: 'Home' },
    { id: 'questions', label: 'Вопросы', icon: 'MessageCircle' },
    { id: 'materials', label: 'Материалы', icon: 'BookOpen' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'chats', label: 'Чаты', icon: 'MessageSquare' },
    { id: 'groups', label: 'Группы', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduHub
              </h1>
            </div>
            
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Поиск материалов, вопросов..."
                  className="pl-10 bg-muted/50 border-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Bell" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
              <Avatar className="cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                  ИВ
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Card className="sticky top-24 shadow-lg border-purple-100 animate-fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-16 h-16 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold">
                      ИВ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Иван Васильев</h3>
                    <p className="text-sm text-muted-foreground">ПИ-301</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span className="text-sm font-medium">Рейтинг</span>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-secondary">
                    #12
                  </Badge>
                </div>
                
                <div className="space-y-2 pt-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedNav(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        selectedNav === item.id
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-6 space-y-4">
            <Card className="shadow-lg border-purple-100 animate-scale-in">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                      ИВ
                    </AvatarFallback>
                  </Avatar>
                  <Input 
                    placeholder="Задайте вопрос или поделитесь материалом..."
                    className="flex-1 bg-muted/50 border-none"
                  />
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="all" className="animate-fade-in">
              <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="questions">Вопросы</TabsTrigger>
                <TabsTrigger value="materials">Материалы</TabsTrigger>
                <TabsTrigger value="assignments">Задания</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-4">
                {posts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="shadow-lg border-purple-100 hover:shadow-xl transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{post.author}</h4>
                            <p className="text-sm text-muted-foreground">{post.time}</p>
                          </div>
                        </div>
                        <Badge className={getTypeColor(post.type)}>
                          <Icon name={getTypeIcon(post.type)} size={14} className="mr-1" />
                          {post.type === 'question' ? 'Вопрос' : post.type === 'material' ? 'Материал' : 'Задание'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground">{post.content}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-muted/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {post.deadline && (
                        <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
                          <Icon name="Clock" size={16} />
                          <span className="font-medium">{post.deadline}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="Heart" size={18} />
                            <span>{post.likes}</span>
                          </Button>
                          {post.answers !== undefined && (
                            <Button variant="ghost" size="sm" className="gap-2">
                              <Icon name="MessageCircle" size={18} />
                              <span>{post.answers}</span>
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" className="gap-2">
                            <Icon name="Share2" size={18} />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="Bookmark" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="col-span-3 space-y-4">
            <Card className="shadow-lg border-purple-100 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" className="text-primary" />
                  <h3 className="font-semibold">Расписание на сегодня</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {schedule.map((lesson, index) => (
                  <div 
                    key={lesson.id}
                    className="p-3 rounded-lg border-2 hover:shadow-md transition-all animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-sm">{lesson.subject}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          <Icon name="MapPin" size={12} className="inline mr-1" />
                          {lesson.room}
                        </p>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getLessonTypeColor(lesson.type)}`}>
                        {lesson.type === 'lecture' ? 'Лекция' : lesson.type === 'seminar' ? 'Семинар' : 'Лаба'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Icon name="Clock" size={14} />
                      {lesson.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-purple-100 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-accent" />
                  <h3 className="font-semibold">Активность</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ответов дано</span>
                    <span className="font-semibold text-primary">24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Материалов</span>
                    <span className="font-semibold text-secondary">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Полезных лайков</span>
                    <span className="font-semibold text-accent">156</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-purple-100 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold">Совет дня</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Используй поиск по тегам, чтобы быстрее находить нужные материалы по предметам!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
