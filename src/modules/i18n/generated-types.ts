// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'pl'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	home: NamespaceHomeTranslation
}

type RootTranslation = {
	app: {
		/**
		 * Platform for students, built to make contributing and sharing resources easy.
		 */
		description: string
		/**
		 * Studentre
		 */
		name: string
	}
	/**
	 * Logo
	 */
	logo: string
}

export type NamespaceHomeTranslation = {
	/**
	 * Homepage
	 */
	homepage: string
	/**
	 * Log in
	 */
	logIn: string
	/**
	 * Sign up
	 */
	signUp: string
}

export type Namespaces =
	| 'home'

type DisallowNamespaces = {
	/**
	 * reserved for 'home'-namespace\
	 * you need to use the `./home/index.ts` file instead
	 */
	home?: "[typesafe-i18n] reserved for 'home'-namespace. You need to use the `./home/index.ts` file instead."
}

export type TranslationFunctions = {
	app: {
		/**
		 * Platform for students, built to make contributing and sharing resources easy.
		 */
		description: () => LocalizedString
		/**
		 * Studentre
		 */
		name: () => LocalizedString
	}
	/**
	 * Logo
	 */
	logo: () => LocalizedString
	home: {
		/**
		 * Homepage
		 */
		homepage: () => LocalizedString
		/**
		 * Log in
		 */
		logIn: () => LocalizedString
		/**
		 * Sign up
		 */
		signUp: () => LocalizedString
	}
}

export type Formatters = {}
