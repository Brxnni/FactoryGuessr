
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const dp0: string;
	export const DriverData: string;
	export const GIT_ASKPASS: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const JAVA_HOME: string;
	export const LANG: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_EXE: string;
	export const NPM_CLI_JS: string;
	export const npm_config_access: string;
	export const npm_config_allow_same_version: string;
	export const npm_config_also: string;
	export const npm_config_always_auth: string;
	export const npm_config_argv: string;
	export const npm_config_audit: string;
	export const npm_config_audit_level: string;
	export const npm_config_auth_type: string;
	export const npm_config_before: string;
	export const npm_config_bin_links: string;
	export const npm_config_browser: string;
	export const npm_config_ca: string;
	export const npm_config_cache: string;
	export const npm_config_cache_lock_retries: string;
	export const npm_config_cache_lock_stale: string;
	export const npm_config_cache_lock_wait: string;
	export const npm_config_cache_max: string;
	export const npm_config_cache_min: string;
	export const npm_config_cafile: string;
	export const npm_config_cert: string;
	export const npm_config_cidr: string;
	export const npm_config_color: string;
	export const npm_config_commit_hooks: string;
	export const npm_config_depth: string;
	export const npm_config_description: string;
	export const npm_config_dev: string;
	export const npm_config_dry_run: string;
	export const npm_config_editor: string;
	export const npm_config_engine_strict: string;
	export const npm_config_fetch_retries: string;
	export const npm_config_fetch_retry_factor: string;
	export const npm_config_fetch_retry_maxtimeout: string;
	export const npm_config_fetch_retry_mintimeout: string;
	export const npm_config_force: string;
	export const npm_config_format_package_lock: string;
	export const npm_config_fund: string;
	export const npm_config_git: string;
	export const npm_config_git_tag_version: string;
	export const npm_config_global: string;
	export const npm_config_globalconfig: string;
	export const npm_config_globalignorefile: string;
	export const npm_config_global_style: string;
	export const npm_config_group: string;
	export const npm_config_ham_it_up: string;
	export const npm_config_heading: string;
	export const npm_config_https_proxy: string;
	export const npm_config_if_present: string;
	export const npm_config_ignore_prepublish: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_init_author_email: string;
	export const npm_config_init_author_name: string;
	export const npm_config_init_author_url: string;
	export const npm_config_init_license: string;
	export const npm_config_init_module: string;
	export const npm_config_init_version: string;
	export const npm_config_json: string;
	export const npm_config_key: string;
	export const npm_config_legacy_bundling: string;
	export const npm_config_link: string;
	export const npm_config_local_address: string;
	export const npm_config_loglevel: string;
	export const npm_config_logs_max: string;
	export const npm_config_long: string;
	export const npm_config_maxsockets: string;
	export const npm_config_message: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const npm_config_node_options: string;
	export const npm_config_node_version: string;
	export const npm_config_noproxy: string;
	export const npm_config_offline: string;
	export const npm_config_onload_script: string;
	export const npm_config_only: string;
	export const npm_config_optional: string;
	export const npm_config_otp: string;
	export const npm_config_package_lock: string;
	export const npm_config_package_lock_only: string;
	export const npm_config_parseable: string;
	export const npm_config_prefer_offline: string;
	export const npm_config_prefer_online: string;
	export const npm_config_prefix: string;
	export const npm_config_preid: string;
	export const npm_config_production: string;
	export const npm_config_progress: string;
	export const npm_config_proxy: string;
	export const npm_config_read_only: string;
	export const npm_config_rebuild_bundle: string;
	export const npm_config_registry: string;
	export const npm_config_rollback: string;
	export const npm_config_save: string;
	export const npm_config_save_bundle: string;
	export const npm_config_save_dev: string;
	export const npm_config_save_exact: string;
	export const npm_config_save_optional: string;
	export const npm_config_save_prefix: string;
	export const npm_config_save_prod: string;
	export const npm_config_scope: string;
	export const npm_config_scripts_prepend_node_path: string;
	export const npm_config_script_shell: string;
	export const npm_config_searchexclude: string;
	export const npm_config_searchlimit: string;
	export const npm_config_searchopts: string;
	export const npm_config_searchstaleness: string;
	export const npm_config_send_metrics: string;
	export const npm_config_shell: string;
	export const npm_config_shrinkwrap: string;
	export const npm_config_sign_git_commit: string;
	export const npm_config_sign_git_tag: string;
	export const npm_config_sso_poll_frequency: string;
	export const npm_config_sso_type: string;
	export const npm_config_strict_ssl: string;
	export const npm_config_tag: string;
	export const npm_config_tag_version_prefix: string;
	export const npm_config_timing: string;
	export const npm_config_tmp: string;
	export const npm_config_umask: string;
	export const npm_config_unicode: string;
	export const npm_config_unsafe_perm: string;
	export const npm_config_update_notifier: string;
	export const npm_config_usage: string;
	export const npm_config_user: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_config_version: string;
	export const npm_config_versions: string;
	export const npm_config_viewer: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSExecutionPolicyPreference: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const windir: string;
	export const _prog: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		dp0: string;
		DriverData: string;
		GIT_ASKPASS: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		JAVA_HOME: string;
		LANG: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		NODE_EXE: string;
		NPM_CLI_JS: string;
		npm_config_access: string;
		npm_config_allow_same_version: string;
		npm_config_also: string;
		npm_config_always_auth: string;
		npm_config_argv: string;
		npm_config_audit: string;
		npm_config_audit_level: string;
		npm_config_auth_type: string;
		npm_config_before: string;
		npm_config_bin_links: string;
		npm_config_browser: string;
		npm_config_ca: string;
		npm_config_cache: string;
		npm_config_cache_lock_retries: string;
		npm_config_cache_lock_stale: string;
		npm_config_cache_lock_wait: string;
		npm_config_cache_max: string;
		npm_config_cache_min: string;
		npm_config_cafile: string;
		npm_config_cert: string;
		npm_config_cidr: string;
		npm_config_color: string;
		npm_config_commit_hooks: string;
		npm_config_depth: string;
		npm_config_description: string;
		npm_config_dev: string;
		npm_config_dry_run: string;
		npm_config_editor: string;
		npm_config_engine_strict: string;
		npm_config_fetch_retries: string;
		npm_config_fetch_retry_factor: string;
		npm_config_fetch_retry_maxtimeout: string;
		npm_config_fetch_retry_mintimeout: string;
		npm_config_force: string;
		npm_config_format_package_lock: string;
		npm_config_fund: string;
		npm_config_git: string;
		npm_config_git_tag_version: string;
		npm_config_global: string;
		npm_config_globalconfig: string;
		npm_config_globalignorefile: string;
		npm_config_global_style: string;
		npm_config_group: string;
		npm_config_ham_it_up: string;
		npm_config_heading: string;
		npm_config_https_proxy: string;
		npm_config_if_present: string;
		npm_config_ignore_prepublish: string;
		npm_config_ignore_scripts: string;
		npm_config_init_author_email: string;
		npm_config_init_author_name: string;
		npm_config_init_author_url: string;
		npm_config_init_license: string;
		npm_config_init_module: string;
		npm_config_init_version: string;
		npm_config_json: string;
		npm_config_key: string;
		npm_config_legacy_bundling: string;
		npm_config_link: string;
		npm_config_local_address: string;
		npm_config_loglevel: string;
		npm_config_logs_max: string;
		npm_config_long: string;
		npm_config_maxsockets: string;
		npm_config_message: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		npm_config_node_options: string;
		npm_config_node_version: string;
		npm_config_noproxy: string;
		npm_config_offline: string;
		npm_config_onload_script: string;
		npm_config_only: string;
		npm_config_optional: string;
		npm_config_otp: string;
		npm_config_package_lock: string;
		npm_config_package_lock_only: string;
		npm_config_parseable: string;
		npm_config_prefer_offline: string;
		npm_config_prefer_online: string;
		npm_config_prefix: string;
		npm_config_preid: string;
		npm_config_production: string;
		npm_config_progress: string;
		npm_config_proxy: string;
		npm_config_read_only: string;
		npm_config_rebuild_bundle: string;
		npm_config_registry: string;
		npm_config_rollback: string;
		npm_config_save: string;
		npm_config_save_bundle: string;
		npm_config_save_dev: string;
		npm_config_save_exact: string;
		npm_config_save_optional: string;
		npm_config_save_prefix: string;
		npm_config_save_prod: string;
		npm_config_scope: string;
		npm_config_scripts_prepend_node_path: string;
		npm_config_script_shell: string;
		npm_config_searchexclude: string;
		npm_config_searchlimit: string;
		npm_config_searchopts: string;
		npm_config_searchstaleness: string;
		npm_config_send_metrics: string;
		npm_config_shell: string;
		npm_config_shrinkwrap: string;
		npm_config_sign_git_commit: string;
		npm_config_sign_git_tag: string;
		npm_config_sso_poll_frequency: string;
		npm_config_sso_type: string;
		npm_config_strict_ssl: string;
		npm_config_tag: string;
		npm_config_tag_version_prefix: string;
		npm_config_timing: string;
		npm_config_tmp: string;
		npm_config_umask: string;
		npm_config_unicode: string;
		npm_config_unsafe_perm: string;
		npm_config_update_notifier: string;
		npm_config_usage: string;
		npm_config_user: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_config_version: string;
		npm_config_versions: string;
		npm_config_viewer: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_scripts_build: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OneDriveConsumer: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSExecutionPolicyPreference: string;
		PSModulePath: string;
		PUBLIC: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		windir: string;
		_prog: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#kit-env-publicprefix) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
