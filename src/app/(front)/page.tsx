import SearchUser from '@/components/SearchUser';

export async function generateMetadata() {
  return {
    title: 'Github Repo Explorer',
    description: 'Tool to search users an get their repo',
  };
}

export default async function Index() {
  return (
    <SearchUser />
  );
};
