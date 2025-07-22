import {AppRoutesProps} from "app/providers/router/config/typings";
import {
	AboutPage,
	MainPage,
	NotFoundPage,
	ReportsPage,
	WhomToHelpPage,
	DonatePage,
	WantToHelpPage,
	VolunteeringPage,
	NewsPage,
	SearchPage,
	ProgramsPage,
	TeamPage,
	JobsPage,
	JobsDetailsPage,
	HelpedPage,
	PartnershipPage,
	NeedHelpPage,
	HelpedDetailsPage, NewsDetailsPage,
} from "pages";

export enum AppRoutes {
	MAIN = 'main', // Главная
	ABOUT = 'about', // О нас
	REPORTS = 'reports', // Документы и отчёты
	WHOM_TO_HELP = 'whom_to_help', // Кому помочь
	DONATE = 'donate', // Пожертвования
	WANT_TO_HELP = 'want_to_help', // Хочу помочь
	VOLUNTEERING = 'volunteering', // Волонтерство
	NEED_HELP = 'need_help', // Нужна помощь
	PARTNERSHIP = 'partnership', // Сотрудничество
	HELPED = 'helped', // Кому помогли
	JOBS = 'jobs', // Вакансии
	TEAM = 'team', // Команды
	JOBS_DETAILS = 'jobs_details', // Вакансии детали
	PROGRAMS = 'programs', // Программы
	CONTACTS = 'contacts', // Контакты
	NEWS = 'news', // Новости
	NEWS_DETAILS = 'news_details', // Новости
	WHOM_TO_HELP_DETAILS = 'whom_to_help_details', // Кому помочь детали
	HELPED_DETAILS = 'helped_details', // Кому помочь детали
	SEARCH = 'search', // Кому помочь детали
	
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.REPORTS]: '/reports',
	[AppRoutes.WHOM_TO_HELP]: '/whom-to-help',
	[AppRoutes.DONATE]: '/donate',
	[AppRoutes.WANT_TO_HELP]: '/want-to-help',
	[AppRoutes.VOLUNTEERING]: '/volunteering',
	[AppRoutes.NEED_HELP]: '/need-help',
	[AppRoutes.PARTNERSHIP]: '/partnership',
	[AppRoutes.HELPED]: '/helped',
	[AppRoutes.JOBS]: '/#jobs',
	[AppRoutes.JOBS_DETAILS]: '/jobs/',
	[AppRoutes.TEAM]: '/team',
	[AppRoutes.PROGRAMS]: '/programs',
	[AppRoutes.CONTACTS]: '/#contacts',
	[AppRoutes.NEWS]: '/news',
	[AppRoutes.NEWS_DETAILS]: '/news/',
	[AppRoutes.WHOM_TO_HELP_DETAILS]: '/whom_to_help/',
	[AppRoutes.HELPED_DETAILS]: '/helped/',
	[AppRoutes.SEARCH]: '/search',
	
	[AppRoutes.NOT_FOUND]: '*',
}


export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.REPORTS]: {
		path: RoutePath.reports,
		element: <ReportsPage />,
	},
	[AppRoutes.WHOM_TO_HELP]: {
		path: RoutePath.whom_to_help,
		element: <WhomToHelpPage />,
	},
	[AppRoutes.DONATE]: {
		path: RoutePath.donate,
		element: <DonatePage />,
	},
	[AppRoutes.WANT_TO_HELP]: {
		path: RoutePath.want_to_help,
		element: <WantToHelpPage />,
	},
	[AppRoutes.VOLUNTEERING]: {
		path: RoutePath.volunteering,
		element: <VolunteeringPage />,
	},
	[AppRoutes.NEED_HELP]: {
		path: RoutePath.need_help,
		element: <NeedHelpPage />,
	},
	[AppRoutes.PARTNERSHIP]: {
		path: RoutePath.partnership,
		element: <PartnershipPage />,
	},
	[AppRoutes.HELPED]: {
		path: RoutePath.helped,
		element: <HelpedPage />,
	},
	[AppRoutes.TEAM]: {
		path: RoutePath.team,
		element: <TeamPage />,
	},
	[AppRoutes.JOBS]: {
		path: RoutePath.partnership + RoutePath.jobs,
		element: <PartnershipPage />,
	},
	[AppRoutes.JOBS_DETAILS]: {
		path: RoutePath.jobs_details + ':id',
		element: <JobsDetailsPage />,
	},
	[AppRoutes.PROGRAMS]: {
		path: RoutePath.programs,
		element: <ProgramsPage />,
	},
	[AppRoutes.CONTACTS]: {
		path: RoutePath.about + RoutePath.contacts,
		element: <AboutPage />,
	},
	[AppRoutes.NEWS]: {
		path: RoutePath.news,
		element: <NewsPage />,
	},
	[AppRoutes.NEWS_DETAILS]: {
		path: RoutePath.news_details + ':id',
		element: <NewsDetailsPage />,
	},
	[AppRoutes.WHOM_TO_HELP_DETAILS]: {
		path: RoutePath.whom_to_help_details + ':id',
		element: <HelpedDetailsPage />,
	},
	[AppRoutes.HELPED_DETAILS]: {
		path: RoutePath.helped_details + ':id',
		element: <HelpedDetailsPage />,
	},
	[AppRoutes.SEARCH]: {
		path: RoutePath.search,
		element: <SearchPage />,
	},
	
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
}