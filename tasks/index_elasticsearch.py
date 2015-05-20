import os
from elasticsearch import Elasticsearch
import requests

ALIGNMENT_URL = 'http://yeastgenome.org/webservice/alignments'
DEFAULT_ES_ADDRESS = 'http://localhost:9200'
INDEX_NAME = 'search-dev2'

ES_ADDRESS = DEFAULT_ES_ADDRESS
es = Elasticsearch(ES_ADDRESS)

def index_loci():
	# get list of genes from alignment webservice
	print '*** FETCHING ALL LOCI ***'
	raw_alignment_data = requests.get(ALIGNMENT_URL).json()
	loci = raw_alignment_data['loci']

	# index loci
	print '*** INDEXING ALL LOCI ***'
	i = 0
	for locus in loci:
		if locus['display_name'] == locus['format_name']:
			name = locus['display_name']
		else:
			name = str(locus['display_name']) + ' / ' + str(locus['format_name'])
		body = {
			'sgdid': locus['sgdid'],
			'name': name,
			'category': 'locus',
			'url': locus['link'],
			'description': locus['headline']
		}
		
		es.index(index=INDEX_NAME, doc_type='searchableItem', id=locus['sgdid'], body=body)
		i += 1

def main():
	index_loci()

main()
