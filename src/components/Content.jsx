import content from '../assets/data/content.json';
import memberPicture from '../assets/member.png';
import anectdoteHeadshot from '../assets/profile.png';

const Content = () => {
	/**
	 * This component is responsible for rendering the content of the page.
	 * It currently uses the content.json file to get the data to display.
	 * However, if this were to be a real project, data like this could be fetched from an API.
	 * This would be done via a useEffect hook to make the fetch call and store it in a state
	 * created from the useState hook. The state would then be used to render the content.
	 */
	return (
		<div className='bg-primary min-h-full px-16 py-8 flex-col'>
			<div className='flex p-4 text-white justify-center'>
				<img className="w-1/2 aspect-video px-16" src={memberPicture} alt="" />
				<div className='w-1/2 px-10 flex flex-col justify-center content-center'>
					<img className="h-26 w-32 mb-4 mx-auto" src={anectdoteHeadshot} alt="" />
					<p className='text-5xl italic text-center mb-4'>{`"${content.anectdote.quote}"`}</p>
					<p className='text-5xl text-center'>- {content.anectdote.author}</p>
				</div>
			</div>
			<div className='flex p-4 text-white'>
				<div className='w-1/2 flex flex-col px-10 justify-center'>
					<p className='text-5xl mb-4'>{content.content.header}</p>
					<p className='text-2xl'>{content.content.body}</p>
				</div>
				<img className="w-1/2 aspect-video px-16" src={memberPicture} alt="" />
			</div>
		</div>
	)
}

export default Content