import React from 'react'
import './style.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ABOUT_PATH, BLOG_PATH, CAREER_PATH, CONTACT_PATH, EDUCATION_PATH, EXPERIENCE_PATH, HOME_PATH, PROJECTS_PATH, SKILLS_PATH } from '../../constants';

// component: 상단 로고 컴포넌트 //
function Logo() {
	return (
		<div id='layout-logo'>
			<div className='box'>
				<div className='title'>Sook's Portpolio</div>
			</div>
		</div>
	)
}

// component: 사이드 네비게이션 컴포넌트 //
function SideNavgation() {

	const { pathname } = useLocation();

	const navigator = useNavigate();

	// variable: 경로 변수 //
	const isHome = pathname.startsWith(HOME_PATH);
	const isAbout = pathname.startsWith(ABOUT_PATH);
	const isSkills = pathname.startsWith(SKILLS_PATH);
	const isProjects = pathname.startsWith(PROJECTS_PATH);
	const isExperience = pathname.startsWith(EXPERIENCE_PATH);
	const isCareer = pathname.startsWith(CAREER_PATH);
	const isEducation = pathname.startsWith(EDUCATION_PATH);
	const isBlog = pathname.startsWith(BLOG_PATH);
	const isContact = pathname.startsWith(CONTACT_PATH);

	const onItemClickHandler = (path: string) => {
		navigator(path);
	};

	return (
		<div id='layout-side-navigation'>
			<div className='navgation'>
				<div className={`navigation-item ${isHome ? 'active' : ''}`} onClick={() => onItemClickHandler(HOME_PATH)}>
					<div className='item-text'>HOME</div>
				</div>
				<div className={`navigation-item ${isAbout ? 'active' : ''}`} onClick={() => onItemClickHandler(ABOUT_PATH)}>
					<div className='item-text'>ABOUT</div>
				</div>
				<div className={`navigation-item ${isSkills ? 'active' : ''}`} onClick={() => onItemClickHandler(SKILLS_PATH)}>
					<div className='item-text'>SKILLS</div>
				</div>
				<div className={`navigation-item ${isProjects ? 'active' : ''}`} onClick={() => onItemClickHandler(PROJECTS_PATH)}>
					<div className='item-text'>PROJECTS</div>
				</div>
				<div className={`navigation-item ${isExperience ? 'active' : ''}`} onClick={() => onItemClickHandler(EXPERIENCE_PATH)}>
					<div className='item-text'>EXPERIENCE</div>
				</div>
				<div className={`navigation-item ${isCareer ? 'active' : ''}`} onClick={() => onItemClickHandler(CAREER_PATH)}>
					<div className='item-text'>CAREER</div>
				</div>
				<div className={`navigation-item ${isEducation ? 'active' : ''}`} onClick={() => onItemClickHandler(EDUCATION_PATH)}>
					<div className='item-text'>EDUCATION</div>
				</div>
				<div className={`navigation-item ${isBlog ? 'active' : ''}`} onClick={() => onItemClickHandler(BLOG_PATH)}>
					<div className='item-text'>BLOG</div>
				</div>
				<div className={`navigation-item ${isContact ? 'active' : ''}`} onClick={() => onItemClickHandler(CONTACT_PATH)}>
					<div className='item-text'>CONTACT</div>
				</div>
			</div>
		</div>
	)
}

// component: 메인 레이아웃 컴포넌트 //
export default function MainLayout() {
	return (
		<div id='main-layout'>
			<div className='category'>
				<Logo />
				<SideNavgation />
			</div>
			<div id='main-wrapper'>
				<Outlet />
			</div>
		</div>
	)
}
