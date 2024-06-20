'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, Heading, Stack, VStack, Text, Center, Highlight } from '@chakra-ui/react'
import AppItem from './components/AppItem'
import NextLink from 'next/link'
import ScrollToTop from './components/ScrollToTop'


// interface Props {
//     apps: {
//         appName: string;
//         appDesc: string;
//         iosUrl: string;
//         appPic: string;
//     }[];
// }

export default function Studio(props: any) {
    return (
        <Flex
            w={'full'}>
            <VStack
                backgroundImage={"/fish-bg.svg"}
                backgroundSize="10%"
                minH={"100vh"}
                backgroundPosition="center"
                // overflow='hidden'
                w={'150vh'}
                
                justify={'center'}
                margin={'0 auto'}>
                <Stack maxW={'3xl'} spacing={6}>
                    <Center><Heading mb={4} marginTop={10}>DIY Food Games</Heading></Center>
                    {props.apps.map((app: any, index: number) => (
                        // const iconUrl = "";
                        // let iconUrl = await getImageUrl(app.appPic);
                        <AppItem app_name={app.appName as string} app_desc={app.appDesc as string} ios_url={app.iosUrl as string} app_icon={app.iconUrl} index_num={index} key={app.appName as string} />
                    ))}
                </Stack>
                <ScrollToTop />
                <Stack spacing={2} marginBottom={'10'} marginTop={10} justify="flex-end">
                    <Center><Text fontSize='1xl'>{new Date().getFullYear()}<Highlight query='DIY Food Games'
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>©  DIY Food Games All Rights Reserved. </Highlight></Text></Center>
                    <Center><Link as={NextLink} href='https://beian.miit.gov.cn'>
                        <Center marginRight={15}>蜀ICP备18034309号-5</Center>
                    </Link></Center>
                </Stack>

            </VStack>
        </Flex>
    )
}
