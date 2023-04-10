import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Text, ScrollView, View, Pressable } from "react-native";
import { EllipsisHorizontalIcon } from "react-native-heroicons/solid";
import {
	BookmarkIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "react-native-heroicons/outline";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
	return (
		<ScrollView className='flex-1 bg-slate-950'>
			<View className='mt-12'>
				<View className='px-4'>
					<Text className='text-base font-semibold text-gray-50'>
						Teste
					</Text>
					<Text className='text-sm font-normal text-gray-500'>
						Lorem ipsum dolor sit met
					</Text>
				</View>

				<Post
					post={{
						user: {
                            name: "papoteste",
                            picture: 'https://avatars.githubusercontent.com/u/61300191?s=400&u=3976f99e67c300181abb912c33374ee64d1dbc2e&v=4'
                        },
						src: "https://wallpapercave.com/wp/wp4511654.jpg",
					}}
				/>
				<Post
					post={{
						user: {
                            name: "charset94",
                            picture: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'
                        },
						src: "https://images.wallpapersden.com/image/download/4k-beautiful-landscape-digital-art_bGhuZm6UmZqaraWkpJRobWllrWdma2U.jpg",
					}}
				/>

				{/* <Pressable
					className='py-2 px-4 rounded-lg mx-6 bg-rose-500 shadow text-white mt-4'
					onPress={() => alert("Você precionou o botão")}
				>
					<Text className='text-white uppercase text-sm'>
						Click me
					</Text>
				</Pressable> */}
			</View>

			<StatusBar style='auto' />
		</ScrollView>
	);
}

const Post = ({ post }) => {
	return (
		<View>
			<View className='flex flex-row items-center mx-4 py-2.5 mt-4'>
				<View className='grow flex flex-row items-center space-x-2'>
					<Image
						className='aspect-square rounded-full w-7 h-7 ring-2 ring-offset-2 ring-blue-500'
						source={post.user.picture}
						placeholder={blurhash}
						contentFit='cover'
						transition={500}
					/>
					<Text className='text-gray-50'>{post.user.name}</Text>
				</View>
				<View>
					<EllipsisHorizontalIcon color='gray' />
				</View>
			</View>

			<Image
				className='aspect-square h-[100vw]'
				source={post.src}
				placeholder={blurhash}
				contentFit='cover'
				transition={500}
			/>

			<View className='flex flex-row items-center justify-between mx-4 py-4'>
				<View className='flex flex-row space-x-4'>
					<View>
						<HeartIcon color='white' />
					</View>

					<View>
						<ChatBubbleOvalLeftEllipsisIcon color='white' />
					</View>

					<View>
						<PaperAirplaneIcon color='white' />
					</View>
				</View>

				<View>
					<BookmarkIcon color='white' />
				</View>
			</View>
		</View>
	);
};
