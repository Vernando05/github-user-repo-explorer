'use client';

import type { z } from 'zod';
import AccordionContentCustom from '@/components/AccordionContentCustom';
import BadgeStar from '@/components/BadgeStar';
import CardCustom from '@/components/CardCustom';
import FormSearch from '@/components/FormSearch';
import SearchResult from '@/components/SearchResult';
import SearchResultContainer from '@/components/SearchResultContainer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FormSearchSchema } from '@/validations/FormSearchSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { graphql } from '../graphql';
import { useQueryGraphQL } from '../hooks/useQueryGraphql';

const querySearch = graphql(`
  query search($first: Int!, $query: String!) {
    search(first: $first, type:USER, query: $query) {
      nodes {
        __typename
        ... on User {
          id
          name
          login
        }
      }
    }
  }
`);

const queryUserRepo = graphql(`
  query userRepo($login: String!) {
    user(login:$login) {
      repositories(first: 100, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          __typename
          id
          name
          description
          stargazerCount
          url
        }
      }
    }
  }
`);

const SearchUser = () => {
  const form = useForm<z.infer<typeof FormSearchSchema>>({
    resolver: zodResolver(FormSearchSchema),
    defaultValues: {
      username: '',
    },
  });

  const [searchQuery, setSearchQuery] = useState<{ first: number; query: string }>({ first: 5, query: '' });
  const {
    data: searchData,
    error: searchError,
    isFetched: searchIsFetched,
    isLoading: searchIsLoading,
    status: searchStatus,
  } = useQueryGraphQL(!!searchQuery.query, querySearch, searchQuery);
  const searchResult = searchData?.data?.search.nodes;

  const onFormSearchSubmit = (values: z.infer<typeof FormSearchSchema>) => {
    setSearchQuery({ first: 5, query: values.username });
  };

  const [activeAccordionValue, setActiveAccordionValue] = useState('');
  const {
    data: profileData,
    error: profileError,
    isLoading: profileIsLoading,
    status: profileStatus,
  } = useQueryGraphQL(!!activeAccordionValue, queryUserRepo, { login: activeAccordionValue });
  const repositoriesResult = profileData?.data?.user?.repositories.nodes;

  const onAccordionValueChange = (value: string) => {
    setActiveAccordionValue(value);
  };

  return (
    <>
      <FormSearch
        form={form}
        isLoading={searchIsLoading}
        onSubmitForm={onFormSearchSubmit}
      />
      <SearchResultContainer
        data={searchResult}
        error={searchError}
        isFetched={searchIsFetched}
        isLoading={searchIsLoading}
        status={searchStatus}
      >
        <SearchResult query={searchQuery.query}>
          <Accordion
            type="single"
            collapsible
            onValueChange={onAccordionValueChange}
          >
            <AnimatePresence>
              {
                searchResult?.map((node) => {
                  if (node?.__typename !== 'User') {
                    return null;
                  }
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="border-b border-(--border)"
                    >
                      <AccordionItem
                        value={node.login}
                      >
                        <AccordionTrigger>
                          {node.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <AccordionContentCustom
                            error={profileError}
                            isLoading={profileIsLoading}
                            status={profileStatus}
                          >
                            <ScrollArea className="h-[400px] pt-3 px-3 border bg-gray-50 rounded-2xl">
                              {
                                repositoriesResult?.length && repositoriesResult.map((item) => {
                                  if (item?.__typename !== 'Repository') {
                                    return null;
                                  }
                                  return (
                                    <motion.div
                                      key={item.id}
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                    >
                                      <CardCustom
                                        title={item.name}
                                        subtitle={item.description}
                                        url={item.url}
                                        target="_blank"
                                      >
                                        <BadgeStar count={item.stargazerCount ?? 0} />
                                      </CardCustom>
                                    </motion.div>
                                  );
                                })
                              }
                            </ScrollArea>
                          </AccordionContentCustom>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })
              }
            </AnimatePresence>
          </Accordion>
        </SearchResult>
      </SearchResultContainer>
    </>
  );
};

export default SearchUser;
