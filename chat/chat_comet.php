<?php
/*
 * Copyright (C) by Volkan Özçelik - http://o2js.com/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

include ('./chat_common.php');

/**
 * A Simple Comet Chat Service.
 *
 * This file is just for demonstration purposes, showing how a continuous
 * streaming comet service works in principle.
 *
 * It requires far more work to be used in a production environment.
 * There are no security measures taken, and the script is vulnerable to XSS and XSRF.
 *
 * Moreover, for a chat service, ideally an XMPP server such as
 * ejabberd or OpenFire should be utilized.
 *
 * Usage:
 * 		chat_comet.php?lastIndex={last index sent}&format={format}
 *
 * Returns:
 * 		This service returns a JSON response or a JSONP response if the format is "jsonp"
 */

function flush_buffer($lines, $lastIndex, $format = 'json', $callback = 'callback') {
	global $CHAT_KEY_LAST_INDEX;
	global $CHAT_KEY_MESSAGE;

	$response = array();
	$response[$CHAT_KEY_MESSAGE] = array_slice($lines, $lastIndex);
	$response[$CHAT_KEY_LAST_INDEX] = count($lines) - 1;

	if($format == 'jsonp')
	{
		echo $callback.'('.json_encode($response).');';
		flush();
		return;	
	}
	
	echo json_encode($response);
	flush();
}

function get_lines() {
	global $CHAT_DATA_FILE_NAME;
	return  explode(PHP_EOL, file_get_contents($CHAT_DATA_FILE_NAME));
}

function page_load() {
	global $CHAT_DATA_FILE_NAME;
	global $CHAT_KEY_LAST_INDEX;
	global $CHAT_CONNECTION_TIMEOUT;
	global $CHAT_KEY_FORMAT;
	global $CHAT_KEY_CALLBACK;
	
	//chat lines
	$lines = get_lines();
	// How many lines are there in total.
	$lineCount = count($lines);
	// The last sequence number retrieved in that session.
	$lastIndex = get($CHAT_KEY_LAST_INDEX, 0);
	// Used for detecting connection timeout.
	$startTime = $currentTime = time();
	// Used for detecting file changes.
	$startModified = $currentModified = filemtime($CHAT_DATA_FILE_NAME);
	// request format
	$format = get($CHAT_KEY_FORMAT, 'json');
	// calback
	$callback = get($CHAT_KEY_CALLBACK, 'callback');

	$isNewData = ($lineCount - 1 > $lastIndex);	
	// if there is unread data, flush immediately.
	if($isNewData) {
		flush_buffer($lines, $lastIndex, $format, $callback);
		die();
	}

	//busy-wait
	while(true) {
		// Give some breathing time for the CPU.
		usleep(10000);

		// Reset file statistics.
		clearstatcache();

		$currentTime = time();
		$currentModified = filemtime($CHAT_DATA_FILE_NAME);

		$isFileModified = ($currentModified - $startModified > 0);
		// Someone else has modified the file, get contents and flush.
		if($isFileModified) {
			$lines = get_lines();
			break;
		}

		$isResponseTimedOut = ($currentTime - $startTime > $CHAT_CONNECTION_TIMEOUT);
		// Nothing special, break and give a default response.
		if($isResponseTimedOut) {
			break;
		}
	}

	flush_buffer($lines, $lastIndex, $format, $callback);
	die();
}

page_load();
?>
