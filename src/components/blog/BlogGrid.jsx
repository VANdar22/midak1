import { Container, Grid, Card, Text, Title, Image, Badge, Group, Avatar } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCalendar, IconClock, IconUser } from '@tabler/icons-react';

const BlogCard = ({ title, excerpt, date, readTime, author, image, category, span }) => (
  <Grid.Col span={span}>
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" style={{ overflow: 'hidden' }}>
      <Card.Section>
        <Image
          src={image}
          height={200}
          alt={title}
          radius={0}
          withPlaceholder
          style={{ width: '100%' }}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Badge color="blue" variant="light">{category}</Badge>
        <Group spacing={8}>
          <Group spacing={4}>
            <IconCalendar size={14} />
            <Text size="xs" color="dimmed">{date}</Text>
          </Group>
          <Group spacing={4}>
            <IconClock size={14} />
            <Text size="xs" color="dimmed">{readTime}</Text>
          </Group>
        </Group>
      </Group>

      <Title order={3} size="h4" mt="xs" mb="sm">{title}</Title>
      <Text size="sm" color="dimmed" lineClamp={3}>
        {excerpt}
      </Text>

      <Group mt="md" position="left" spacing="xs">
        <IconCalendar size={14} />
        <Text size="sm" color="dimmed">{date}</Text>
        <Text size="sm" color="dimmed">•</Text>
        <IconClock size={14} />
        <Text size="sm" color="dimmed">{readTime}</Text>
      </Group>
    </Card>
  </Grid.Col>
);

export function BlogGrid() {
  const isMobile = useMediaQuery('(max-width: 576px)');
  
  const featuredPost = {
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development and how they will impact developers and businesses alike.',
    date: 'Nov 15, 2024',
    readTime: '5 min read',
    author: 'Sarah Johnson',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  };

  const posts = [
    {
      title: 'Getting Started with React 19',
      excerpt: 'A comprehensive guide to the new features and improvements in React 19 and how to upgrade your applications.',
      date: 'Nov 10, 2024',
      readTime: '8 min read',
      author: 'Mike Chen',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324b6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'The Power of TypeScript',
      excerpt: 'How TypeScript can help you write more maintainable and scalable JavaScript applications with fewer bugs.',
      date: 'Nov 5, 2024',
      readTime: '6 min read',
      author: 'Emma Wilson',
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'CSS Grid vs Flexbox',
      excerpt: 'When to use CSS Grid and when to stick with Flexbox - a practical guide with examples.',
      date: 'Oct 28, 2024',
      readTime: '7 min read',
      author: 'David Kim',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1547658719-d9bbecbdcafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'State Management in 2024',
      excerpt: 'Comparing different state management solutions for modern React applications.',
      date: 'Oct 20, 2024',
      readTime: '9 min read',
      author: 'Lisa Wong',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl" align="center">Latest Articles</Title>
      
      <Grid gutter="xl">
        {/* Featured Post */}
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Card shadow="lg" radius="md" withBorder h="100%">
            <Card.Section>
              <Image
                src={featuredPost.image}
                height={400}
                alt={featuredPost.title}
              />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
              <Badge color="blue" size="lg" variant="light">{featuredPost.category}</Badge>
              <Group spacing={8}>
                <Group spacing={4}>
                  <IconCalendar size={14} />
                  <Text size="sm" color="dimmed">{featuredPost.date}</Text>
                </Group>
                <Group spacing={4}>
                  <IconClock size={14} />
                  <Text size="sm" color="dimmed">{featuredPost.readTime}</Text>
                </Group>
              </Group>
            </Group>
            <Title order={2} size="h2" mt="xs" mb="sm">{featuredPost.title}</Title>
            <Text size="md" mb="md">
              {featuredPost.excerpt}
            </Text>
            <Group mt="md" position="apart">
              <Group spacing={4}>
                <Avatar size={32} radius="xl" />
                <Text size="sm" weight={500}>{featuredPost.author}</Text>
              </Group>
            </Group>
          </Card>
        </Grid.Col>

        {/* Sidebar with two smaller posts */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Grid gutter="md">
            {posts.slice(0, 2).map((post, index) => (
              <Grid.Col span={12} key={`sidebar-${index}`}>
                <BlogCard {...post} />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>

        {/* Bottom row of posts */}
        {posts.map((post, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: index % 2 === 0 ? 8 : 4 }}>
            <BlogCard {...post} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
