import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";

const CreateProject = () => {
	const [title, setTitle] =
		useState("");
	const [content, setContent] =
		useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, content);
		setTitle("");
		setContent("");
	};

	return (
		<div className='my-20'>
			<form
				className='flex justify-center'
				onSubmit={handleSubmit}>
				<div className='w-9/12 flex flex-col'>
					<div className='mb-5'>
						<div>
							<p className='text-2xl font-bold pb-10 text-[#9c5a5e]'>
								Create Project
							</p>
						</div>
						<TextField
							id='title'
							label='Title'
							variant='outlined'
							className='w-full'
							onChange={(e) =>
								setTitle(e.target.value)
							}
						/>
					</div>
					<div className='mb-5'>
						<TextareaAutosize
							minRows={3}
							id='content'
							placeholder='Add your content here'
							className='w-full border p-2 rounded'
							onChange={(e) =>
								setContent(
									e.target.value
								)
							}
						/>
					</div>
					<div>
						<button className='rounded py-2 px-5 bg-[#b7747d] hover:bg-[#9c5a5e] text-white text-lg font-medium'>
							create
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateProject;
